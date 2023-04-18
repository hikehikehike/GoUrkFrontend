// export const getUsers = () => {
//   return client.get<User[]>('/users');
// };

// import axios from 'axios';

// export const getUserPosts = (userId: number) => {
//   return client.get<Post[]>(`/posts?userId=${userId}`);
// };

// export const getComments = (postId: number) => {
//   return client.get<Comment[]>(`/comments?postId=${postId}`);
// };

// export const postComment = (commentToPost: CommentData) => {
//   return client.post<Comment>('/comments', commentToPost);
// };

// export const deleteComment = (commentToDelete: number) => {
//   return client.delete(`/comments/${commentToDelete}`);
// };
// export const useData = () => {

// }

// const BASE_URL = 'https://goukraine.onrender.com/api/city';

// axios.defaults.baseURL = BASE_URL;
// const loadCityInfo = async(city) => {
//   try {
//     setIsError(false);
//     setIsLoading(true);
//     const cityInfoFromServer = await axios.get(city);

//     if (cityInfoFromServer) {
//       console.log(cityInfoFromServer);
//     }
//   } catch {
//     setIsError(true);
//     // Notiflix.Notify.failure('
// Can`t get city information.Please try again');
//   } finally {
//     setIsLoading(false);
//   }
// };
