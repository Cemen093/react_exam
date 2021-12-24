import axios from "axios";

export default class HitService {
  static async getAll(q = '', category = '', per_page = 10, page = 1){
    const key = '23798924-17f42c690434b5dec74a9c318';
    const response = await axios.get(`https://pixabay.com/api/?key=${key}&image_type=photo&q=${q}
      &category=${category}&per_page=${per_page}&page=${page}`)
    // console.log({
    //   totalHits: response.data.totalHits,
    //   hits: response.data.hits.map(hit => [
    //     {previewURL: hit.previewURL},
    //     {likes: hit.likes},
    //     {comment: hit.comment}
    //   ])
    // })
    return response
  }
}