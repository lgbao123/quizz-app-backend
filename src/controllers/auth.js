import * as services from '../services'
export const register = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(100).json({
         DT: '',
         EC: 1,
         EM: 'Not empty'
      })
      const response = await services.register(req.body);
      return res.status(200).json(response)

   } catch (error) {
      return res.status(500).json({
         DT: '',
         EC: -1,
         EM: 'Internal server error'
      })
   }

}