import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log(response.data)
    const houses = response.data.map((housePOJO) => new House(housePOJO))
    AppState.houses = houses
  }
}

export const housesService = new HousesService