import { testTutorialMetaDataArrayMetaData } from "./test-helpers/tutorialMetaDataArray";
import { testTutorialMetaDataItem } from "./test-helpers/tutorialMetaDataItem";
import { getTutorialMetaDataByLink } from "./tutorialDataService";

describe("tutorialDataService", () => {
  describe("getTutorialMetaDataByLink()", () => {
    it("Returns single metadata item from object using parsed link string", () => {
      const result = getTutorialMetaDataByLink(
        "/programming/quickly-setup-next-js-with-typescript",
        testTutorialMetaDataArrayMetaData
      );

      expect(result).toEqual(testTutorialMetaDataItem);
    });
  });
});
