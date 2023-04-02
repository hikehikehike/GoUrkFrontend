// export const getUsers = () => {
//   return client.get<User[]>('/users');
// };

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

// const loadPostComments = async () => {
//   try {
//     setIsError(false);
//     setIsLoading(true);
//     const commentsFromServer = await getComments(post.id);

//     if (commentsFromServer.length) {
//       setComments(commentsFromServer);
//     }
//   } catch {
//     setIsError(true);
//     Notiflix.Notify.failure("Can`t get comments.Please try again");
//   } finally {
//     setIsLoading(false);
//   }
// };
