import Link from '@/components/Link';
import type { IProject } from '@/types/index';

const ProjectCard = ({ title, description, href, icon }: IProject) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          <Link href={href} aria-label={`Link to ${title}`} className="flex gap-3 items-center">
            {icon}
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <Link
          href={href}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
