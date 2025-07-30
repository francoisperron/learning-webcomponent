interface ShowErrorProps {
    error?: string | null
}

export const ShowError = ({error}: ShowErrorProps) =>
    error && <p>Oups {error}</p>
