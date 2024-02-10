import passages from "../data/passages.json";

export class DataUtils {
  static getPassage = () => {
    return passages[Math.floor(Math.random() * 11)].text;
  };
}
