"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import { useChoose } from "@/hooks/use-choose-modal";

export const ChooseModal = () => {
    const settings = useChoose();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const selectedTheme = formData.get('theme');

        // Log or handle the selected theme (e.g., save to state, local storage, API)
        console.log(`Selected theme: ${selectedTheme}`);

        // Close the dialog after submission
        settings.onClose();
    };

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">Settings</h2>
                </DialogHeader>

                {/* Form starts here */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <Label>Appearance</Label>
                            <span className="text-[0.8rem] text-muted-foreground">
                        Customize how Notion looks on your device
                    </span>

                            {/* Options */}
                            <div className="mt-2">
                                <Label className="mb-1">Choose a theme:</Label>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="theme" value="light" required />
                                        <span className="ml-2">Light Mode</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="theme" value="dark" />
                                        <span className="ml-2">Dark Mode</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="theme" value="system" />
                                        <span className="ml-2">System Default</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button type="submit" className="btn-primary">Save Settings</button>
                            <button type="button" onClick={settings.onClose} className="btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
                {/* Form ends here */}
            </DialogContent>
        </Dialog>

    );
};
