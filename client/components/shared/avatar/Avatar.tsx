import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({avatar} : any) {
  return (
    <div className="flex justify-center">
    <Avatar className="w-28 h-28">
      <AvatarImage src={avatar} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
  );
}
