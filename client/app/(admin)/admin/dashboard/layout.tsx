import ProfileNavLinks from "@/components/shared/ProfileNavLinks";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <section className=" bg-black min-h-[300px] h-screen pt-[50px]">
    <h1 className="text-white text-3xl text-center font-bold">Admin Panel </h1>
    <h1 className="text-white text-3xl text-center mt-5 mb-5 font-bold">St.Antony's Jacobite Syrian Cathedral</h1>

    <div className="wrapper flex gap-8 wrapper flex-col md:flex-row ">
      <aside className="flex-[2] h-full">
        <nav>
          <ul className="grid gap-3">
            <li>
              <ProfileNavLinks href="/admin/dashboard">
                Dashboard
              </ProfileNavLinks>
            </li>
            <li>
              <ProfileNavLinks href="/admin/dashboard/events">
                Event Management
              </ProfileNavLinks>
            </li>
            <li>
              <ProfileNavLinks href="/admin/dashboard/prayer-requests">Prayer Requests</ProfileNavLinks>
            </li>
            <li>
              <ProfileNavLinks href="/admin/dashboard/update">
                Update Data
              </ProfileNavLinks>
            </li>
            <li>
              <ProfileNavLinks href="/admin/dashboard/gallery">Gallery</ProfileNavLinks>
            </li>
           
          </ul>
        </nav>
      </aside>
      <div className="bg-gray-900 flex-[8] text-white p-4 rounded  min-h-[300px]">
        {children}
      </div>
    </div>
    </section>
   </>
  );
}