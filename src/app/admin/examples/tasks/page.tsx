import type { Metadata } from 'next';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

import { taskSchema } from './data/schema';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

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
      <DataTable
        columns={columns}
        data={tasks}
      />
    </div>
  );
}
