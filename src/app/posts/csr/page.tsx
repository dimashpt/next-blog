'use client';

import { DataTable } from '@/components/data-table';
import { useQuery } from '@tanstack/react-query';

import { columns } from './data';
import { getPosts } from '@/services/post';
import { NextPage } from 'next';

const PostCSRPage: NextPage = () => {
  // const tasks = await getTasks();
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="flex h-full flex-1 flex-col space-y-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Post List</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your created posts
          </p>
        </div>
      </div>
      <DataTable data={data ?? []} columns={columns} />
    </div>
  );
};

export default PostCSRPage;
