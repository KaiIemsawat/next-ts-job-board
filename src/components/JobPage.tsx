import { Job } from "@prisma/client";
import Image from "next/image";

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
    </section>
  );
};
export default JobPage;
