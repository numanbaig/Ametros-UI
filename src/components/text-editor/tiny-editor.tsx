import React, { useCallback } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";
import { Typography } from "../typography";

interface EditorButton {
  id: string;
  title: string;
  action: "inline" | "block";
  value: string;
  icon?: React.ReactNode;
  text?: string;
}

const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const editorRef = React.useRef<Editor>(null);

  const editorButtons: EditorButton[] = [
    {
      id: "bold",
      title: "Bold",
      action: "inline",
      value: "BOLD",
      icon: <Bold size={16} />,
    },
    {
      id: "italic",
      title: "Italic",
      action: "inline",
      value: "ITALIC",
      icon: <Italic size={16} />,
    },
    {
      id: "underline",
      title: "Underline",
      action: "inline",
      value: "UNDERLINE",
      icon: <Underline size={16} />,
    },
    {
      id: "h1",
      title: "Heading 1",
      action: "block",
      value: "header-one",
      icon: <Heading1 size={16} />,
    },
    {
      id: "h2",
      title: "Heading 2",
      action: "block",
      value: "header-two",
      icon: <Heading2 size={16} />,
    },
    {
      id: "h3",
      title: "Heading 3",
      action: "block",
      value: "header-three",
      icon: <Heading3 size={16} />,
    },
    {
      id: "bullet",
      title: "Bullet List",
      action: "block",
      value: "unordered-list-item",
      icon: <List size={16} />,
    },
    {
      id: "strike",
      title: "Strikethrough",
      action: "inline",
      value: "STRIKETHROUGH",
      icon: <Strikethrough size={16} />,
    },
  ];

  const focus = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  const handleKeyCommand = useCallback(
    (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return "handled";
      }
      return "not-handled";
    },
    []
  );

  const toggleInlineStyle = useCallback((style: string) => {
    setEditorState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, style)
    );
  }, []);

  const toggleBlockType = useCallback((blockType: string) => {
    setEditorState((currentState) =>
      RichUtils.toggleBlockType(currentState, blockType)
    );
  }, []);

  const isInlineStyleActive = useCallback(
    (style: string) => {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    },
    [editorState]
  );

  const isBlockTypeActive = useCallback(
    (blockType: string) => {
      const selection = editorState.getSelection();
      const currentBlockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return currentBlockType === blockType;
    },
    [editorState]
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, action: string, value: string) => {
      e.preventDefault();
      if (action === "inline") {
        toggleInlineStyle(value);
      } else {
        toggleBlockType(value);
      }
      setTimeout(focus, 0);
    },
    [toggleInlineStyle, toggleBlockType, focus]
  );

  const onUndo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setEditorState(EditorState.undo(editorState));
      setTimeout(focus, 0);
    },
    [editorState, focus]
  );

  const onRedo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setEditorState(EditorState.redo(editorState));
      setTimeout(focus, 0);
    },
    [editorState, focus]
  );

  const canUndo = editorState.getUndoStack().size > 0;
  const canRedo = editorState.getRedoStack().size > 0;

  return (
    <div className="w-full">
      <div className="space-y-2">
        <Typography variant="body1" className="text-neutral-black">
          Interaction instructions (shown to learner)
        </Typography>
        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
          <div className="p-4 min-h-[402px]" onClick={focus}>
            <Editor
              ref={editorRef}
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Type your text here..."
            />
          </div>
          <div className="flex items-center gap-1 p-1 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-1 border-r border-gray-200 pr-1">
              <button
                onMouseDown={onUndo}
                disabled={!canUndo}
                className={`p-1.5 rounded transition-colors ${
                  canUndo ? "hover:bg-gray-200 text-gray-700" : "text-gray-400"
                }`}
                title="Undo"
              >
                <Undo2 size={16} />
              </button>
              <button
                onMouseDown={onRedo}
                disabled={!canRedo}
                className={`p-1.5 rounded transition-colors ${
                  canRedo ? "hover:bg-gray-200 text-gray-700" : "text-gray-400"
                }`}
                title="Redo"
              >
                <Redo2 size={16} />
              </button>
            </div>
            {editorButtons.map((button) => (
              <button
                key={button.id}
                onMouseDown={(e) =>
                  handleButtonClick(e, button.action, button.value)
                }
                className={`p-1.5 rounded transition-colors ${
                  button.action === "inline"
                    ? isInlineStyleActive(button.value)
                      ? "bg-gray-200 text-blue-600"
                      : "hover:bg-gray-200 text-gray-700"
                    : isBlockTypeActive(button.value)
                    ? "bg-gray-200 text-blue-600"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
                title={button.title}
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
