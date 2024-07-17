import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log(response.data)
  }
}

export const housesService = new HousesService