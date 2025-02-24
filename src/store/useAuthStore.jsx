
import {create} from 'zustand'
import api from '../api'

export const useAuthStore = create((set) => ({

    authUser: null,
    isSigninfUp: false,
    isLoginIn: false,

    isCheckingAuth: true,

    checkAuth: async (req, res) => {
        // const token = localStorage.getItem('token')
        try {
            const {data} = await api.get('/get-users')

            console.log(`data: ${data}`)

            set({authUser: data})
            
        } catch (error) {

            set({authUser: null})
            
        }
        finally {
            set({isCheckingAuth: false})
        }
    }
}))
