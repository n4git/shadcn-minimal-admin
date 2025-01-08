import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { taskSchema } from './data/schema';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
};

async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), './src/app/admin/examples/tasks/data/tasks.json'));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}
