import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* <h1 className='text-center mt-2 '>"Welcome to the admin page! Here you can manage content, events, and settings for our church website"."</h1> */}
        <h1 className="text-2xl mt-5 text-center">Publish Announcements</h1>
      <div className="flex flex-col items-center justify-center h-[80%]">
        <div className="flex flex-row gap-5 justify-center items-center">
          <Input type="text" placeholder="Announcement" className="text-xl p-10"/>
          <Button type="submit" variant={"outline"} className="text-black">Publish</Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
