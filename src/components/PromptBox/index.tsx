import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faImage,
  faFilePdf,
  faXmark,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Attachment, PromptBoxProps } from "./types";
import { cn } from "@/lib/utils";

export const PromptBox: React.FC<PromptBoxProps> = ({
  onSubmit,
  className,
}) => {
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const promptBoxRef = useRef<HTMLDivElement>(null);

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        event.target instanceof Element &&
        !event.target.closest("button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Capturar eventos de colagem (Ctrl+V)
  useEffect(() => {
    const handlePaste = async (event: ClipboardEvent) => {
      if (!promptBoxRef.current?.contains(event.target as Node)) return;

      const items = event.clipboardData?.items;
      if (!items) return;

      for (const item of Array.from(items)) {
        if (item.type.startsWith("image/")) {
          event.preventDefault();
          const file = item.getAsFile();
          if (file) {
            await addAttachment(file, "image");
          }
          break;
        }
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleAttachmentClick = (type: "image" | "pdf") => {
    const inputRef = type === "image" ? fileInputRef : pdfInputRef;
    if (inputRef.current) {
      inputRef.current.click();
    }
    setIsMenuOpen(false);
  };

  const addAttachment = (file: File, type: "image" | "pdf"): Promise<void> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target?.result as string;
        setAttachments((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            type,
            file,
            preview,
            name: file.name,
          },
        ]);
        resolve();
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "pdf"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await addAttachment(file, type);
    e.target.value = ""; // Reset input
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((attachment) => attachment.id !== id));
  };

  const handleSubmit = () => {
    if (!message.trim() && attachments.length === 0) return;

    // Chamar callback de envio se existir
    onSubmit?.({ message, attachments });

    // Limpar formulário
    setMessage("");
    setAttachments([]);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div
        ref={promptBoxRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700"
      >
        <div className="min-h-[100px] p-4 space-y-4">
          {/* Área de anexos */}
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {attachments.map((attachment) => (
                <div key={attachment.id} className="relative group">
                  {attachment.type === "image" ? (
                    <div className="relative w-20 h-20">
                      <img
                        src={attachment.preview}
                        alt={attachment.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center p-2">
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="w-8 h-8 text-gray-500"
                      />
                      <span className="text-xs truncate w-full text-center mt-1">
                        {attachment.name}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => removeAttachment(attachment.id)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                    title="Remover anexo"
                  >
                    <FontAwesomeIcon icon={faXmark} className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Área de texto */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="w-full resize-none bg-transparent border-0 focus:ring-0 outline-none dark:text-white min-h-[60px]"
            rows={3}
          />
        </div>

        {/* Barra de ações */}
        <div className="border-t dark:border-gray-700 p-4 flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              title="Adicionar anexo"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="w-5 h-5 text-gray-500"
              />
            </button>

            {isMenuOpen && (
              <div
                ref={dropdownRef}
                className="absolute bottom-full left-0 mb-2 bg-gray-800/90 backdrop-blur rounded-xl shadow-lg border border-gray-700/50 overflow-hidden min-w-[200px] transition-all duration-200"
              >
                <button
                  onClick={() => handleAttachmentClick("image")}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-700/50 text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faImage} className="w-4 h-4" />
                  <span>Adicionar fotos e arquivos</span>
                </button>
                <button
                  onClick={() => handleAttachmentClick("pdf")}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-700/50 text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4" />
                  <span>Anexar PDF</span>
                </button>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "image")}
          />

          <input
            type="file"
            ref={pdfInputRef}
            className="hidden"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, "pdf")}
          />

          <button
            onClick={handleSubmit}
            disabled={!message.trim() && attachments.length === 0}
            className="ml-auto bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
          >
            <span>Enviar</span>
            <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
