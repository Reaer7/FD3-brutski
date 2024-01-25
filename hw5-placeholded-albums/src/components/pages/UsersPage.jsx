import { useLoad } from "../../hooks/useLoad";
import { loadUsers } from "../../api/jsonplaceholder";
import { Spinner } from "../common/Spinner";
import { UsernameLine } from "../common/UsernameLine";

export function UsersPage() {
    const { data, isLoading } = useLoad(loadUsers, true);

    return <>
        <h3>Users</h3>
        {isLoading
            ? <Spinner />
            : <div className="rows left">
                {data.map(user => <UsernameLine
                    key={user.id}
                    {...user}
                />)}
            </div>
        }
    </>
}