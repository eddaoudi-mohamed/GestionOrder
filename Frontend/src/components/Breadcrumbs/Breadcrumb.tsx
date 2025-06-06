import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  subPageName?: string;
}
const Breadcrumb = ({ pageName ,subPageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/dashboard">
              Dashboard /
            </Link>
          </li>
          <li className={`font-medium ${subPageName ? "": "text-primary" }`}>
            {pageName}
          </li>

          {subPageName ? (
            <li className={`font-medium text-primary`}> / {subPageName}</li>
          ) : (
            ""
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
