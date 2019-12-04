

  export interface ICountry {
      ID: string;
      LocalizedName: string;
  }

  export interface IAdministrativeArea {
      ID: string;
      LocalizedName: string;
  }

  export interface ICity {
      Version: number;
      Key: string;
      Type: string;
      Rank: number;
      LocalizedName: string;
      Country: ICountry;
      AdministrativeArea: IAdministrativeArea;
  }


