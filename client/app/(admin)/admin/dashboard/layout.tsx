
import { cookies } from 'next/headers'

import ProfileNavLinks from "@/components/admin/ProfileNavLinks";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { getCookie } from "@/lib/auth";
import Logout from '@/components/admin/Logout';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const token = cookies().get('Jwt_login_token')?.value   

  // const deleteCookie = async () => {
  //   cookies().delete('Jwt_login_token')
  // }
  return (
    <>
      <section className=" bg-black min-h-[300px] h-screen pt-[50px]">
        <h1 className="text-white text-3xl text-center font-bold">
          Admin Panel{" "}
        </h1>
        <h1 className="text-white text-3xl text-center mt-5 mb-5 font-bold">
          St.Antony&apos;s Jacobite Syrian Cathedral
        </h1>

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
                  <ProfileNavLinks href="/admin/dashboard/upcoming-events">
                    Upcoming Events
                  </ProfileNavLinks>
                </li>
                <li>
                  <ProfileNavLinks href="/admin/dashboard/prayer-requests">
                    Prayer Requests
                  </ProfileNavLinks>
                </li>
                <li>
                  <ProfileNavLinks href="/admin/dashboard/parish">
                    Add Member
                  </ProfileNavLinks>
                </li>
                <li>
                  <ProfileNavLinks href="/admin/dashboard/parish-members">
                    Parish Management
                  </ProfileNavLinks>
                </li>
                {/* <li>
                  <ProfileNavLinks href="/admin/dashboard/gallery">
                    Add Images{" "}
                  </ProfileNavLinks>
                </li>
                <li>
                  <ProfileNavLinks href="/admin/dashboard/add-relics">
                    Add Relics
                  </ProfileNavLinks>
                </li> */}
                <li>
                  <ProfileNavLinks href="/admin/dashboard/banner">
                    Banner management
                  </ProfileNavLinks>
                </li>
                <li>
                  <ProfileNavLinks href="/admin/dashboard/registers">
                    Add register
                  </ProfileNavLinks>
                </li>
                { token &&
                  <Logout />
                }
              </ul>
            </nav>
          </aside>
          <div className="bg-gray-900 flex-[8] text-white p-4 rounded  min-h-[300px]">
            {children}
            <Toaster />
          </div>
        </div>
      </section>
    </>
  );
}
