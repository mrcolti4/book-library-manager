import { AuthLogStatus, UserAuthLog } from "@/types/Admin/User";
import TableRow from "../TableRow";
import TableColumn from "../TableColumn";
import clsx from "clsx";

export default function AuthLogItem({ log }: { log: UserAuthLog }) {
    let actionStatus: AuthLogStatus;
    let actionStatusLabel = {
        login: "LOGIN",
        logout: "LOGOUT",
        failed_login: "FAILED LOGIN",
        uknown: "UKNOWN",
    };

    switch (true) {
        case log.login_successful && log.login_at !== null:
            actionStatus = "login";
            break;
        case log.logout_at !== null && !log.login_successful:
            actionStatus = "logout";
            break;
        case log.login_at !== null && !log.login_successful:
            actionStatus = "failed_login";
            break;
        default:
            actionStatus = "uknown";
    }
    const classes = clsx("max-md:w-1/3 w-1/5", {
        "!text-rose-500": actionStatus === "failed_login",
        "!text-green-500": actionStatus === "login",
        "!text-yellow-500": actionStatus === "logout",
        "!text-gray-500": actionStatus === "uknown",
    });

    return (
        <TableRow>
            <TableColumn className="hidden w-1/5 md:table-cell">
                {log.ip_address}
            </TableColumn>
            {actionStatus === "login" || actionStatus === "failed_login" ? (
                <TableColumn className="w-1/2 md:w-1/3">
                    {log.login_at
                        ? new Date(log.login_at).toLocaleString()
                        : "-"}
                </TableColumn>
            ) : (
                <TableColumn className="w-1/2 md:w-1/3">
                    {log.logout_at
                        ? new Date(log.logout_at).toLocaleString()
                        : "-"}
                </TableColumn>
            )}
            <TableColumn className={classes}>
                {actionStatus ? actionStatusLabel[actionStatus] : ""}
            </TableColumn>
        </TableRow>
    );
}
