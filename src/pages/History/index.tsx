import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu historico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duracao</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>tarefa</td>
                            <td>20:00</td>
                            <td>Ha cerca de 2 horas</td>
                            <td>
                                <Status statusColor="green">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20:00</td>
                            <td>Ha cerca de 2 horas</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20:00</td>
                            <td>Ha cerca de 2 horas</td>
                            <td>
                                <Status statusColor="red">Interrompido</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>

        </HistoryContainer>
    );
}