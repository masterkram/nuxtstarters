import { useAsyncData, type AsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

function shouldBeFiltered(
  listing: ListingContent,
  tags: string[],
  search: string
): boolean {
  const bagOfWords = listing.description + listing.title;

  if (search && tags.length > 0) {
    const searchMatch = bagOfWords.includes(search);
    const tagsMatch =
      listing.tags && tags.some((tag) => listing.tags.includes(tag));
    return searchMatch || tagsMatch;
  }

  if (search) {
    return bagOfWords.includes(search);
  }

  if (tags.length > 0) {
    return listing.tags && tags.some((tag) => listing.tags.includes(tag));
  }

  return true;
}

export function useDirectory(): AsyncData<
  ListingContent[] | null,
  Error | null
> {
  const intersection = useAppConfig()?.directory?.search?.tags?.intersection;

  const search: Ref<string> = useState("search");
  const tags: Ref<string[]> = useState("tags");

  const directoryData = useAsyncData(
    "board",
    () => {
      const query = queryContent("/dir");

      query.where({
        _extension: "md",
      });

      query.only([
        "featured",
        "card_image",
        "description",
        "title",
        "_path",
        "tags",
      ]);

      return query.sort({ featured: 1 }).find() as Promise<ListingContent[]>;
    },
    {
      watch: [search, tags],
      transform: (listings) => {
        return listings.filter((listing) =>
          shouldBeFiltered(listing, tags.value, search.value)
        );
      },
    }
  );

  return directoryData;
}
