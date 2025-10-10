import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function PostsComponent() {
    // استخدام useQuery مع destructuring لإضافة refetch و status
    const { error, data,isError, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['fetchPosts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
                res.json()
            ),
        staleTime: 5000, // البيانات تظل "حديثة" لمدة 5 ثواني قبل ما يعيد الجلب
    refetchOnWindowFocus: true, // يعيد الجلب تلقائيًا عند الرجوع للنافذة
    keepPreviousData: true, // يحافظ على البيانات القديمة أثناء تحميل الجديدة    
    });

    if (isError) return <div className="text-center text-red-600">❌ Error loading posts</div>;
    if (isLoading) return <div className="text-center text-gray-500">⏳ Loading posts...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4 text-center">📜 All Posts</h1>

            {/* زر لإعادة الجلب اليدوي */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => refetch()}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
                >
                    🔄 Refresh Posts
                </button>
            </div>

            {/* حالة لو البيانات بتتحدث (isFetching) */}
            {isFetching && <p className="text-center text-sm text-gray-500">Updating data...</p>}

            <div className="space-y-4">
                {data.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
