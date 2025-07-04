import { dirname, resolve } from "node:path";
import globToFixtures from "./glob-to-fixtures.js";

const octokitFixturesPath = new URL(
  import.meta.resolve("@octokit/fixtures"),
).pathname.replace("index.js", "");
const DEFAULT_FIXTURES_GLOB = resolve(
  octokitFixturesPath,
  "scenarios/**/normalized-fixture.json",
);

export default {
  port: 3000,
  fixturesUrl: null,
  logLevel: "info",
  ttl: 60000,
  fixtures: globToFixtures(DEFAULT_FIXTURES_GLOB),
  fixturesGlob: DEFAULT_FIXTURES_GLOB.replace(process.cwd(), "."),
};
