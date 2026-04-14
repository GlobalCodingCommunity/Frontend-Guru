# useQuery

## What is the hook asking for?

    hook receives fn, a function that returns promise
    deps, dependancy array
    returns loading, success, error
        loading: { status: "loading" }
        success: { status: "success", data }
        error: { status: "error", error: error,}

## what must you consider?

    race condition ( use ignore )

## why is there a race condition?

    react does not cancel promises

    trigger a: return promise a
    trigger b: return promise b (before a finishes)
    react updates ui with correct result for b
    react doesnt know a is outdated so rerender -> a

## how do we fix the race condition

    use a flag to ignore when promise is met.
    marks older reqs invalid so results are ignored 
    when things resolve.

## what must we do at the start?

    setState({ status: "loading" });
    
    Because when deps change, the hook should:
    Immediately show loading
    Then show new data/error when ready
    This matches how React Query, SWR, Apollo, etc. behave.
