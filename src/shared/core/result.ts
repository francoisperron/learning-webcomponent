export type Result<T> = Success<T> | Failure

type Success<T> = {
    readonly isFailure: false
    readonly value: T
}

type Failure = {
    readonly isFailure: true
    readonly error: string
}

const success = <T>(value: T): Success<T> => ({
    isFailure: false,
    value
})

const failure = (error: string): Failure => ({
    isFailure: true,
    error
})

export const Result = {
    success,
    failure
} as const
