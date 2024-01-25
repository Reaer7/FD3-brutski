import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadUser } from "../../api/jsonplaceholder";

export function UserInfo({ userId }) {
    const { data: user, isLoading } = useLoad(
        () => loadUser(userId),
        !!userId
    );

    return <>
        {isLoading
            ? <Spinner/>
            : <div>
                <h2>Info:</h2>
                <div className="left">
                    <div className="padding-bottom-10">Username: {user.username}</div>
                    <div className="padding-bottom-10">Name: {user.name}</div>
                    <div className="padding-bottom-10">Email: {user.email}</div>
                    <div className="padding-bottom-10">Company: {user?.company?.name}</div>
                </div>
            </div>
        }
    </>
}