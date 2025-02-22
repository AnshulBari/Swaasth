import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
  <section className="remove-scrollbar container my-auto flex-1 overflow-hidden">
    <div className="sub-container max-w-[860px] flex-1 justify-between">
      <Image
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="logo"
        className="mb-12 h-10 w-fit"
      />

      <AppointmentForm
        patientId={patient?.$id}
        userId={userId}
        type="create"
      />

      <p className="copyright mt-10 py-12">© 2025 Swaasth</p>
    </div>
  </section>

  <Image
    src="/assets/images/appointment-img.jpeg"
    height={1500}
    width={1500}
    alt="appointment"
    className="side-img max-w-[400px] bg-bottom object-cover"
  />
</div>

  );
};

export default Appointment;
