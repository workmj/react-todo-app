import { useEffect, useState } from "react";
import usePosts from './usePosts';

function App() {

	const {
		posts,
		loading,
		error
	} = usePosts();

	if(loading){
		return <p>불러오는 중...</p>
	}

	if(error){
		return <p>{error}</p>
	}

	if(posts.length === 0){
		return <p>게시글이 없습니다.</p>
	}

	return (
		<>
			<h1>게시글 목록</h1>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>
					{post.title}
					</li>
				))}
			</ul>
		</>
	);
}

export default App;