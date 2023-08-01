import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getWorkers } from '../service/WorkerService';

const WorkersList = () => {
  const { data: workers, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getWorkers()
  })

  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <div>
      {workers.map((worker: any, id: string) => {
        return(
          <div key={id}>{worker.first_name}</div>
        )
      })}
    </div>
  );
}

export default WorkersList;