import { Job } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface JobPageProps {
  job: Job;
}

const JobPage = ({
  job: {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  },
}: JobPageProps) => {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="Company Logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
      </div>
      <div>
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="font-semibold">
            {applicationUrl ? (
              <Link
                href={new URL(applicationUrl).origin}
                className="text-green-500 hover:underline"
              >
                {companyName}
              </Link>
            ) : (
              <span>{companyName}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
export default JobPage;
