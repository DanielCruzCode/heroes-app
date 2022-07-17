export {}

declare global {
  interface ComicDataWrapper {
    code?: number //The HTTP status code of the returned result.,
    status?: string // A string description of the call status.,
    copyright?: string // The copyright notice for the returned result.,
    attributionText?: string // The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.,
    attributionHTML?: string // An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.,
    data?: ComicDataContainer // The results returned by the call.,
    etag?: string // A digest value of the content returned by the call.
  }
  interface ComicDataContainer {
    offset?: number // The requested offset (number of skipped results) of the call.,
    limit?: number // The requested result limit.,
    total?: number // The total number of resources available given the current filter set.,
    count?: number // The total number of results returned by this call.,
    results?: Array<Comic> // The list of comics returned by the call
  }

  interface Comic {
    id?: number // The unique ID of the comic resource.,
    digitalId?: number // The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
    title?: string // The canonical title of the comic.,
    issueNumber?: number // The number of the issue in the series (will generally be 0 for collection formats).,
    variantDescription?: string // If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
    description?: string // The preferred description of the comic.,
    modified?: Date // The date the resource was most recently modified.,
    isbn?: string // The ISBN for the comic (generally only populated for collection formats).,
    upc?: string // The UPC barcode number for the comic (generally only populated for periodical formats).,
    diamondCode?: string // The Diamond code for the comic.,
    ean?: string // The EAN barcode for the comic.,
    issn?: string // The ISSN barcode for the comic.,
    format?: string // The publication format of the comic e.g. comic, hardcover, trade paperback.,
    pageCount?: number // The number of story pages in the comic.,
    textObjects?: Array<TextObject> // A set of descriptive text blurbs for the comic.,
    resourceURI?: string // The canonical URL identifier for this resource.,
    urls?: Array<Url> // A set of public web site URLs for the resource.,
    series?: SeriesSummary // A summary representation of the series to which this comic belongs.,
    variants?: Array<ComicSummary> // A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
    collections?: Array<ComicSummary> // A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
    collectedIssues?: Array<ComicSummary> // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
    dates: Array<ComicDate> // A list of key dates for this comic.,
    prices: Array<ComicPrice> // A list of prices for this comic.,
    thumbnail: Image // The representative image for this comic.,
    images: Array<Image> // A list of promotional images associated with this comic.,
    creators: CreatorList // A resource list containing the creators associated with this comic.,
    characters: CharacterList // A resource list containing the characters which appear in this comic.,
    stories: StoryList // A resource list containing the stories which appear in this comic.,
    events: EventList // A resource list containing the events in which this comic appears.
  }

  type TextObject = {
    type?: string // The canonical type of the text object (e.g. solicit text, preview text, etc.).,
    language?: string // The IETF language tag denoting the language the text object is written in.,
    text?: string // The text.
  }
  type Url = {
    type?: string // A text identifier for the URL.,
    url?: string // A full URL (including scheme, domain, and path).
  }
  type SeriesSummary = {
    resourceURI?: string //The path to the individual series resource.,
    name?: string //The canonical name of the series.
  }
  type ComicSummary = {
    resourceURI?: string // The path to the individual comic resource.,
    name?: string // The canonical name of the comic.
  }
  type ComicDate = {
    type?: string // A description of the date (e.g. onsale date, FOC date).,
    date?: Date // The date.
  }
  type ComicPrice = {
    type?: string // A description of the price (e.g. print price, digital price).,
    price?: number // The price (all prices in USD).
  }
  type Image = {
    path?: string // The directory path of to the image.,
    extension?: string // The file extension for the image.
  }
  type CreatorList = {
    available?: number // The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of creators returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of creators in this collection.,
    items?: Array<CreatorSummary> // The list of returned creators in this collection.
  }
  type CreatorSummary = {
    resourceURI?: string // The path to the individual creator resource.,
    name?: string // The full name of the creator.,
    role?: string // The role of the creator in the parent entity.
  }
  type CharacterList = {
    available?: number // The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of characters returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of characters in this collection.,
    items?: Array<CharacterSummary> // The list of returned characters in this collection.
  }
  type CharacterSummary = {
    resourceURI?: string //The path to the individual character resource.,
    name?: string //The full name of the character.,
    role?: string //The role of the creator in the parent entity.
  }
  type StoryList = {
    available?: number // The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of stories returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of stories in this collection.,
    items?: Array<StorySummary> // The list of returned stories in this collection.
  }
  type StorySummary = {
    resourceURI?: string // The path to the individual story resource.,
    name?: string // The canonical name of the story.,
    type?: string // The type of the story (interior or cover).
  }
  type EventList = {
    available?: number // The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of events returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of events in this collection.,
    items?: Array<EventSummary> // The list of returned events in this collection.
  }
  type EventSummary = {
    resourceURI?: string // The path to the individual event resource.,
    name?: string // The name of the event.
  }
}
