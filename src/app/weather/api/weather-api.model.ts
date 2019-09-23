export namespace API {

  export interface Weather {
    weather: {
      main: string;
      description: string;
    }[];

    main: {
      temp: number;
      pressure: number;
      humidity: number;
      temp_min: number;
      temp_max: number;
    };

    wind: {
      speed: number;
      deg: number;
    };

    clouds: {
      all: number;
    };
  }
}
