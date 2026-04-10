"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { EvidenceFile } from "@/types/case";
import { formatSize, FILE_SIZE_WARN_BYTES, FILE_SIZE_MAX_BYTES } from "@/lib/utils";

type FileUploadProps = {
  label?: string;
  helperText?: string;
  files: EvidenceFile[];
  onChange: (files: EvidenceFile[]) => void;
};

export default function FileUpload({ label, helperText, files, onChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const dragCounterRef = useRef(0);

  function readFiles(selected: File[]) {
    if (selected.length === 0) return;

    // Read each file as base64 immediately so the content is embedded in the
    // EvidenceFile object. This survives sessionStorage serialisation, page
    // refreshes, and any module re-initialisation — unlike an in-memory store.
    const readers = selected.map(
      (f) =>
        new Promise<EvidenceFile>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            // result is "data:<mime>;base64,<data>" — strip the prefix
            const dataUrl = reader.result as string;
            const commaIndex = dataUrl.indexOf(",");
            if (commaIndex === -1) {
              reject(new Error(`Unexpected FileReader output for "${f.name}"`));
              return;
            }
            const base64 = dataUrl.slice(commaIndex + 1);
            resolve({ name: f.name, type: f.type, size: f.size, data: base64 });
          };
          reader.onerror = () => reject(new Error(`Failed to read "${f.name}"`));
          reader.readAsDataURL(f);
        })
    );

    Promise.all(readers)
      .then((evidenceFiles) => {
        onChange([...files, ...evidenceFiles]);
      })
      .catch((err) => console.error("[FileUpload] read failed:", err));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    readFiles(selected);
    // Reset so the same file can be re-added if needed
    if (inputRef.current) inputRef.current.value = "";
  }

  function handleDragOver(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  function handleDragEnter(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    dragCounterRef.current += 1;
    setIsDragOver(true);
  }

  function handleDragLeave(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current === 0) {
      setIsDragOver(false);
    }
  }

  function handleDrop(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragOver(false);
    const selected = Array.from(e.dataTransfer.files);
    readFiles(selected);
  }

  function handleRemove(index: number) {
    onChange(files.filter((_, i) => i !== index));
  }

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  const isError = totalBytes >= FILE_SIZE_MAX_BYTES;
  const isWarn = !isError && totalBytes >= FILE_SIZE_WARN_BYTES;

  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <span className="text-sm font-medium text-slate-700">{label}</span>
      )}
      {helperText && (
        <p className="text-xs text-slate-400 leading-relaxed">{helperText}</p>
      )}

      <input ref={inputRef} type="file" multiple className="hidden" onChange={handleChange} />

      {/* Drop zone button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`group flex flex-col items-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
          isDragOver
            ? "border-emerald-400 bg-emerald-50"
            : "border-slate-300 hover:border-emerald-400 hover:bg-emerald-50/50"
        }`}
      >
        {/* Upload icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className={`transition-colors ${isDragOver ? "text-emerald-500" : "text-slate-400 group-hover:text-emerald-500"}`}
        >
          <rect x="6" y="20" width="20" height="6" rx="3" fill="currentColor" opacity="0.15" />
          <path
            d="M16 18V8M11 13l5-5 5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 24h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
        <span className={`text-sm font-medium transition-colors ${isDragOver ? "text-emerald-700" : "text-slate-600 group-hover:text-emerald-700"}`}>
          {isDragOver ? "Drop files here" : "Click or drag files here"}
        </span>
        <span className="text-xs text-slate-400">
          Images, PDFs, or other documents
        </span>
      </button>

      {/* File list */}
      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-0.5">
          {files.map((f, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm shadow-sm"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                {/* File type dot */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <rect x="2" y="1" width="8" height="12" rx="1.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
                    <path d="M8 1v3h3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.6" />
                    <rect x="4" y="7" width="5" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
                    <rect x="4" y="9.5" width="3.5" height="1" rx="0.5" fill="currentColor" opacity="0.4" />
                  </svg>
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-slate-800 font-medium">{f.name}</span>
                  <span className="text-xs text-slate-400">{formatSize(f.size)}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(i)}
                className="ml-3 shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={`Remove ${f.name}`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Size warnings */}
      {isError && (
        <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-xs text-red-700">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 4.5v3M7 9.5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span>
            Total size is {formatSize(totalBytes)}, which exceeds the 4.5 MB export limit.
            Export will likely fail — remove some files or use smaller versions.
          </span>
        </div>
      )}
      {isWarn && (
        <div className="flex items-start gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-3 text-xs text-amber-700">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
            <path d="M7 2L1.5 12h11L7 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M7 6v2.5M7 10h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span>
            Total size is {formatSize(totalBytes)} — approaching the 4.5 MB export limit.
            If export fails, try removing some files or using smaller versions.
          </span>
        </div>
      )}
    </div>
  );
}
