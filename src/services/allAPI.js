import Category from "../components/Category"
import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//add component call : upload video - store video in http://localhost:3000/videos
export const uploadVideoAPI = async (video) => {
    //send response to add component
    return await commonAPI("POST", `${SERVER_URL}/videos`, video)
}

//get video api called by View.jsx
export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/videos`, "")
}

//store watch history by videoCard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, videoDetails)
}

//get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")

}

// remove history from watch component
export const removeHistoryAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`, {})
}

// remove video from home
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/videos/${videoId}`, {})
}

//save category to category component
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/categories`, categoryDetails)
}


//get category to category component
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/categories`, "")
}
//no body and parameter at get

//remove category api
export const removeCategoryApi = async (categoryId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${categoryId}`, {})
}

// get single video api
export const getAVideoAPI = async (videoId) => {
    return await commonAPI("GET", `${SERVER_URL}/videos/${videoId}`, "")
}

// update category api
export const updateCategoryAPI = async (categoryId, updatedCategoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/categories/${categoryId}`, updatedCategoryDetails)
}

// getSingleCategory api
export const getSingleCategoryAPI = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/categories/${categoryId}`, "")
}