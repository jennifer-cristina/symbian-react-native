import { showErrorToast } from "../utils/errors";
import { removePhoneMask } from "../utils/masks";
import api from "./api";

export const patientRegisterService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone ? removePhoneMask(data.phone) : '',
            celular: data.mobile ? removePhoneMask(data.mobile) : '',
            email: data.email,
            nome_responsavel: data.name_responsible,
            telefone_responsavel: data.phone_responsible ? removePhoneMask(data.phone_responsible) : ''
        }

        const result = await api.post("/cadastrarPacientes", formattedData);

        const success = result.status === 200

        return {
            success,
            data: result.data,
        }

    } catch (error) {

        showErrorToast(error.response.data.message)

        return {
            success: false,
            data: error.response.data
        }
    }

}

export const getPatientsService = async () => {
    try {

        const result = await api.get(`/listarPacientes`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                name: item.nome,
                phone: item.telefone
            }
        })

        return {
            success,
            data: formattedData
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}