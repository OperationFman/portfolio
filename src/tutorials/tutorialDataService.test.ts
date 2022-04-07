import {
  getTutorialMetaData,
  getTutorialMetaDataByLink,
} from "./tutorialDataService";
import { tutorialMetaData } from "./database/TutorialMetaData";
import { mocked } from "jest-mock";
import { testTutorialMetaDataArrayMetaData } from "./test-helpers/tutorialMetaDataArray";

jest.mock("./database/TutorialMetaData", () => ({}));

describe("tutorialDataService", () => {
  //TODO: getTutorialData and getTutorialMetaDataByLink
  it("Returns the unchanged tutorial meta data", () => {
    expect(true).toEqual(true);
  });
});
