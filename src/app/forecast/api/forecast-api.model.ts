export namespace API {

  export interface Forecast {
    list: {
      dt_txt: string;

      weather: {
        main: string;
        description: string;
      }[];

      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
      };

      wind: {
        speed: number;
      };
    }[];
  }
}
