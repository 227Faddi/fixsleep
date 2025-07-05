import * as StoreReview from "expo-store-review";
import { useAskReviewStore } from "../store/appStore";

const REVIEW_THRESHOLD = 5;
const COOLDOWN_MS = 1000 * 60 * 60 * 24 * 7;
// const COOLDOWN_MS = 1000 * 60 * 60;

export function useReviewPrompt() {
  const { count, setCount, lastPrompt, setLastPrompt } = useAskReviewStore();

  const tryPromptReview = async () => {
    const now = Date.now();

    // Check cooldown
    if (lastPrompt && now - lastPrompt < COOLDOWN_MS) return;

    const isAvailable = await StoreReview.isAvailableAsync();
    if (!isAvailable) return;

    if (count + 1 >= REVIEW_THRESHOLD) {
      await StoreReview.requestReview();
      setLastPrompt(now);
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return { tryPromptReview };
}
