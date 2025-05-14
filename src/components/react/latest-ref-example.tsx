import { type DependencyList, useEffect, useRef, useState } from 'react'

export function useLatestRefEffect<const T extends { [key: string]: any }>(
  effect: (latest: T) => ReturnType<typeof useEffect>,
  deps: DependencyList,
  latest: T,
) {
  let latestRef = useRef(latest)
  let proxyRef = useRef<T>(undefined)
  useEffect(() => {
    latestRef.current = latest
  })
  useEffect(() => {
    if (!proxyRef.current) {
      proxyRef.current = new Proxy(latestRef, {
        get: (target, p) => target.current[p as keyof T],
      }) as unknown as T
    }
    return effect(proxyRef.current)
  }, deps)
}

export function LatestRefExample() {
  let [value, setValue] = useState('')
  let [result, setResult] = useState<boolean | null>(null)
  useLatestRefEffect(
    (latest) => {
      setResult(null)
      check(value).then(
        (valid) => latest.value == value && latest.setResult(valid),
      )
    },
    [value],
    { value, setResult },
  )
  return (
    <div className="not-content border-sl-gray-5 mt-4 rounded-lg border p-4">
      <label>
        Value:
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-sl-gray-5 ml-2 rounded border px-2"
        />
      </label>
      <span className="ml-4">
        {result == null ? 'Checking...' : `Result: ${result}`}
      </span>
    </div>
  )
}

async function check(handle: string) {
  await new Promise((resolve) => setTimeout(resolve, 200 + Math.random() * 800))
  return handle.length % 2 == 1
}
