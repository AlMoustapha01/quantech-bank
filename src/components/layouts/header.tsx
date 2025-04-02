import { Mail, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
export function Header() {
    return (
        <header className="shadow-xl font-bangla z-50">
            <div className="mx-auto px-10 py-6 max-w-[90%]">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-1 border-r border-gray-200"></div>
                    <div className="col-span-3 flex flex-col justify-center py-2">
                        <p className="text-2xl font-bold">Hi, Brou</p>
                        <p className="text-lg text-gray-500">
                            <span className="text-2xl mr-2">👋</span>
                            Bienvenue sur ton dashboard
                        </p>
                    </div>
                    <div className="col-span-1 flex justify-end items-center">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-4">
                                <div className="relative">
                                    <div className="relative">
                                        <Mail />
                                        <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0.5 border border-white" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative">
                                        <Bell />
                                        <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0.5 border border-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>
                                        <User className="w-4 h-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col py-2">
                                    <p className="text-2xl font-bold">Brou</p>
                                    <p className="text-lg text-gray-500">
                                        Elishama
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>)
}