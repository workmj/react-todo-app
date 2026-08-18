import { useEffect, useState } from 'react';

function usePosts(){
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchPosts(){
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts");
				if(!response.ok){
					throw new Error('API 요청 실패');
				}
				const data = await response.json();
				setPosts(data);
			} catch(error) {
				setError('게시글을 불러오지 못했습니다.')
			} finally {
				setLoading(false);
			}
		}

		fetchPosts();
	}, []);

	return {
		posts,
		loading,
		error
	}

}

export default usePosts;