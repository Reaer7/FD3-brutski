import { useLoad } from "../../hooks/useLoad";
import { loadUsers } from "../../api/jsonplaceholder";
import { Spinner } from "../common/Spinner";
import { UsernameLine } from "../common/UsernameLine";

export function UsersPage() {
    const { data, isLoading } = useLoad(loadUsers);

    return <>
        <h3>This is Users Page!</h3>
        {isLoading
            ? <Spinner />
            : <div className="rows">
                {data.map(user => <UsernameLine
                    key={user.id}
                    {...user}
                />)}
            </div>
        }
    </>
}