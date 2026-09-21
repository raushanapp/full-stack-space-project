const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

const { getPagination } = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);
    const launches = await getAllLaunches({ skip, limit });
    return res.status(200).json(launches);
  } catch (error) {
    console.error("Error fetching launches:", error);
    return res.status(500).json({ error: "Failed to fetch launches" });
  }
}

async function httpAddNewLaunch(req, res) {
  try {
    const launch = req.body;
    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.launchDate ||
      !launch.target
    ) {
      return res
        .status(400)
        .json({ error: "Missing required launch property" });
    }
    const launchDate = new Date(launch.launchDate);

    if (Number.isNaN(launchDate.getTime())) {
      return res.status(400).json({ error: "Invalid launch date" });
    }
    launch.launchDate = launchDate;
    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
  } catch (error) {
    console.error("Error scheduling launch:", error);
    return res.status(500).json({ error: "Failed to schedule launch" });
  }
}

async function httpAbortLaunch(req, res) {
  try {
    const launchId = Number(req.params.id);
    //  if launch does't exist
    const existingLaunch = await existsLaunchWithId(launchId);
    if (!existingLaunch) {
      return res.status(404).json({ error: "Launch not found" });
    }
    //  if  launch  does exists
    const aborted = await abortLaunchById(launchId);
    if (!aborted) {
      return res.status(400).json({ error: "Failed to abort launch" });
    }

    return res.status(200).json({ ok: true, message: "Launch aborted" });
  } catch (error) {
    console.error("Error aborting launch:", error);
    return res.status(500).json({ error: "Failed to abort launch" });
  }
}
module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
