import { Avatar } from "primereact/avatar";
import React from "react";
import { Client } from "../../../types/client";

interface Props {
    client: Client;
}

const ClientDetails: React.FC<Props> = ({ client }) => {
    return (
        <>
            <div className="flex flex-col justify-between text-center w-full mt-4 px-2">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-black">
                    Customer Details
                </h3>
                <div className="flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center justify-between text-center w-full md:justify-around py-8 gap-4 ">
                        <Avatar icon="pi pi-user" size="xlarge" />
                        <div className="flex justify-around flex-col items-center text-base dark:text-white font-semibold leading-4 text-black">
                            <p>{client.name}</p>
                        </div>
                    </div>
                    <div className="flex justify-between  dark:text-white border-t border-slate-400 py-4 px-4 w-full">
                        <p className="text-black font-semibold">Email</p>

                        <p className="cursor-pointer text-sm ">{client.email}</p>
                    </div>
                    <div className="flex justify-between  dark:text-white border-t border-slate-400 py-4 px-4 w-full">
                        <p className="text-black font-semibold">Phone</p>

                        <p className="cursor-pointer text-sm ">{client.phone}</p>
                    </div>
                </div>
            </div>
            </>
    );
};

export default ClientDetails;
