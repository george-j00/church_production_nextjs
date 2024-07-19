import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({avatar} : any) {
  return (
    <div className="flex justify-center">
    <Avatar className="w-20 h-20">
      <AvatarImage src={avatar} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
  );
}
